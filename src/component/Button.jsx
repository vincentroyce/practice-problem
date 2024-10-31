




const Button = (properties) => {
  return (
    <input onClick={properties.onClick} type="button" value={properties.value} className={`btn col-5 btn-lg btn-${properties.purpose}`} />
  )
}

export default Button