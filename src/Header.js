

const Header = ({title}) => {
    
  return (
    <header >     {/* insert it in the expressionn in the jsx  */}    
        <h1>{title}</h1>
    </header>
  )
}

Header.defaultProps ={
    title: "Default Title"
}

export default Header;