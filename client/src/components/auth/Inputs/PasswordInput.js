const PasswordInput = ({ password, setPassword }) => {
    return (
        <div>
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
            >
                Password
            </label>
            <div className="mt-1">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

export default PasswordInput;
