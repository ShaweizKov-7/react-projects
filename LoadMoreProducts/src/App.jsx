import { LoadMoreProducts } from "./Component/LoadMoreProducts"

function App() {
 return(
  <LoadMoreProducts url='https://dummyjson.com/products' limit={20}/>
 )
}

export default App
