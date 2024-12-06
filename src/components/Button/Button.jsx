import classes from './Button.module.css' //для модульной системы извлекаем объект classes

export default function Button({ children, isActive, ...props }) {
  return (
    <button
      {...props}
      className={
        isActive ? `${classes.button} ${classes.active}` : classes.button
      }
    >
      {children}
    </button>
  )
}
