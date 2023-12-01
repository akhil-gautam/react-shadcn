import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const SignUp = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();

  const formSubmit = async (data) => {
    await axios.post('/users', data);
    toast.success('Registered in successfully');
    navigate('/signin');
  };

  return (
    <form className="flex justify-center items-center w-full min-h-screen" onSubmit={handleSubmit(formSubmit)}>
      <Card className="w-2/5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="full_name">Full name</Label>
            <Input type="text" id="full_name" {...register('full_name')} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" {...register('email')} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register('password')} />
          </div>
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="terms"
              onCheckedChange={(checked) => {
                setValue('terms_and_conditions', checked);
              }}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Submit</Button>
        </CardFooter>
      </Card>
    </form>
  );
};

export default SignUp;
