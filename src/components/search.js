function search() {
  return (
    <header>               
       <nav>
            <span class="icons-colums" ><i class="fa fa-minus fa-2x"></i></span>
            <span class="icons-colums" ><i class="fa fa-plus fa-2x"></i></span>
       </nav>
       <form class="search-from">
        <span class="icon"><i class="fa fa-search"></i></span>
        <input type="search" id="search" placeholder="Buscar..." />
    </form>
    </header>   
  );
}

export default search;
