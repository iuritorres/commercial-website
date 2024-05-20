interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`px-6 py-4 w-fit text-center text-lg text-light
      rounded-primary bg-primary hover:bg-primary-dark ${className}`}
    >
      {children}
    </button>
  );
};