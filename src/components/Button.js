const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} btn btn--primary`}
        {...props}
    />
)

export default Button
