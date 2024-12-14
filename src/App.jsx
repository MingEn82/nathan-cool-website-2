import { Route, Routes } from 'react-router-dom'
import Dataset from "./views/Dataset";
import Home from "./views/Home";
import Plot from "./views/Plot";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dataset/:datasetId' element={<Dataset />} />
      <Route path='/plot/:plotId' element={<Plot />} />
    </Routes>
  )
}