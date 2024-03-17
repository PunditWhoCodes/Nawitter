interface ButtonProps {
    label: string,
    secodary?: boolean,
    onClick?: () => void,
    disabled?: boolean,
    fullWidth?: boolean,
    large?: boolean,
    outline?: boolean,
}
const Button: React.FC<ButtonProps> = ({
    label,
    secodary,
    onClick,
    disabled,
    fullWidth,
    large,
    outline,
}) => {
    return ( 
        <button  disabled={disabled} onClick={onClick}
        className= {`
            disabled:opacity-70 disabled:cursor-pointer rounded-full font-semibold hover:opacity-80 transition border-2 ${fullWidth? 'w-full' : 'w-fit'} ${secodary? 'bg-white' : 'bg-sky-500'} ${secodary? 'text-black' : 'text-white'} ${secodary? 'border-black' : 'border-sky-500'}
            ${large? 'text-xl' : 'text-md'}
            ${large? 'px-5' : 'px-4'}
            ${large? 'py-3' : 'py-2'}
            ${outline? 'bg-transparent' : ''}
            ${outline? 'border-white' : ''}
            ${outline? 'text-while' : ''}
        `}>
            {label}
        </button>
     );
}
 
export default Button;