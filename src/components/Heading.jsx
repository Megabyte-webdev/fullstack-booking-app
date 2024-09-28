
const Heading = ( { title, subTitle } ) => {
  return (
    <>
        <h1 className="text-3xl font-medium"> { title && title } </h1>   
        <p className="sm:w-1/3 text-center text-sm"> { subTitle && subTitle } </p> 
    </>
  )
}

export default Heading