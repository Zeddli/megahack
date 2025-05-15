import LoginForm from '../components/LoginForm';
import PageLayout from '../components/PageLayout';

export default function LoginPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        <LoginForm />
      </div>
    </PageLayout>
  );
} 