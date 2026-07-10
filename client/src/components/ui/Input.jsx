function Input({
    label,
    className = "",
    ...props
}) {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label className="font-medium">
                    {label}
                </label>
            )}

            <input
                className={`rounded-lg border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
                {...props}
            />
        </div>
    );
}

export default Input;