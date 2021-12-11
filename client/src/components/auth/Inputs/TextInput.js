const TextInput = ({ property, setProperty, propertyValue }) => {
    
    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    return (
        <div>
            <label
                htmlFor={property}
                className="block text-sm font-medium text-gray-700"
            >
                {capitalizeFirstLetter(property)}
            </label>
            <div className="mt-1">
                <input
                    id={property}
                    name={property}
                    type="text"
                    required
                    value={propertyValue}
                    onChange={(e) => {
                        setProperty(e.target.value);
                    }}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
        </div>
    );
};

export default TextInput;
