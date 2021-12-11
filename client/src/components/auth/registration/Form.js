import TextInput from './../Inputs/TextInput';
import EmailInput from './../Inputs/EmailInput';
import PasswordInput from './../Inputs/PasswordInput';

const Form = ({handleSubmit, name, setName, email, setEmail, password, setPassword}) => {
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit}>

                    <TextInput property={'name'} value={name} setProperty={setName} />

                    <EmailInput email={email} setEmail={setEmail} />

                    <PasswordInput password={password} setPassword={setPassword} />

                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <p className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                            </p>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;