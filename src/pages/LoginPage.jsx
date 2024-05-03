// import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/http/api"
import { useMutation } from "@tanstack/react-query"
import { useRef } from "react"

import { Link, useNavigate } from "react-router-dom"

function LoginPage() {
	const emailRef = useRef();
	const passwordRef = useRef();

	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: login,
		onSuccess: () => {
			console.log('login successfull');
			navigate('/admin/dashboard/home')
		}
	  })

	const handleLoginSubmit = () => {
		const email = emailRef.current?.value
		const password = passwordRef.current?.value

		if(!email || !password) {
			return alert('Please provide email and password');
		}

		mutation.mutate({email, password});
	}
  return (
	<div className="flex justify-center items-center h-screen w-screen bg-slate-800">
		<Card className="mx-auto max-w-sm">
		<CardHeader>
			<CardTitle className="text-2xl">Login</CardTitle>
			<CardDescription>
			Enter your email below to login to your account
			</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor="email">Email</Label>
				<Input
				ref={emailRef}
				id="email"
				type="email"
				placeholder="m@example.com"
				required
				/>
			</div>
			<div className="grid gap-2">
				<div className="flex items-center">
				<Label htmlFor="password">Password</Label>
				</div>
				<Input 
				ref={passwordRef} 
				id="password" 
				type="password" 
				placeholder='************' 
				required />
			</div>
				<Link to={''} className="ml-auto inline-block text-sm underline">
					Forgot your password?
				</Link>
			<Button onClick={handleLoginSubmit} type="submit" className="w-full">
				Login
			</Button>
			</div>
			<div className="mt-4 text-center text-sm">
			Don&apos;t have an account?{" "}
			<Link to={'/register'} className="underline">
				Register
			</Link>
			</div>
		</CardContent>
		</Card>
	</div>
  )
}
  
export default LoginPage