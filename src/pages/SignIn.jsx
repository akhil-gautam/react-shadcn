import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Auth from '@/lib/auth';

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const formSubmit = async (data) => {
    const response = await axios.post('/users/sign_in', data);
    const auth = {
      'access-token': response.headers['access-token'],
      client: response.headers['client'],
      uid: response.headers['uid'],
      expiry: response.headers['expiry'],
    };
    Auth.set({ auth });
    toast.success('Logged in successfully');
    navigate('/');
  };

  return (
    <form className="flex justify-center items-center w-full min-h-screen" onSubmit={handleSubmit(formSubmit)}>
      <Card className="w-2/5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" {...register('email')} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register('password')} />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignIn;
