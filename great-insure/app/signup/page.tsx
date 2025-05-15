import SignUpForm from '../components/SignUpForm';
import PageLayout from '../components/PageLayout';

export default function SignUpPage() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-center mb-8">Join Our Farm Protection Platform</h1>
        <SignUpForm />
      </div>
    </PageLayout>
  );
} 