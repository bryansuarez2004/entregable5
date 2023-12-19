const Pagination = ({lastPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {
 

   
  const handleLastPage = () =>{
     setCurrentPage(lastPage)
  };
   
  const handleFirstPage = () =>{
    setCurrentPage(1)
 };

 const handleNextPage = () =>{
 const nextPage = currentPage + 1;
 
 if(nextPage <= lastPage){
    setCurrentPage(nextPage);
 }
 };

 const handlePreviusPage = () => {
  const  previusPage     = currentPage - 1;
  if(previusPage > 0 ){
    setCurrentPage(previusPage);
  }
 };
  
   
    return (
    <ul className="conteinerPagination">

<button onClick={handleFirstPage} className="PaginationBtn">
            {'<<'}
        </button>
        <button onClick={handlePreviusPage} className="PaginationBtn">
            {'<'}
        </button>

     {
        pagesInCurrentBlock.map((page)=>{
            let background = '#FFF0D7'
   let color = 'black'
            if(page === currentPage){
                background='#E2000C'
                color='white'
               }
             
            return(


            
                <li key={page}>
                    <button 
                    style={{
                        backgroundColor:background,
                        color:color
                    }}
                    onClick={()=> setCurrentPage(page)} className="PaginationBtn">{page}</button>
                </li>
            )
        })
     }
     <li>
        <button onClick={handleNextPage} className="PaginationBtn">
            {'>'}
        </button>
        <button onClick={handleLastPage} className="PaginationBtn">
            {'>>'}
        </button>
     </li>


    </ul>
  )
}
export default Pagination