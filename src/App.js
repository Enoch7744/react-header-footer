import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';

function App() {
	return (
	  <div className="App">
		<Header />
		// rest of the JSX code here
	  </div>
	);
  }

function App() {
	return ( 
	<BrowserRouter>
		<Footer />
		  <div>
			<Routes>
			  <Route exact path="/" element={<LandingPage setter={setUser}/>} />
			  <Route exact path="/mainpage" element={
					<MainPage 
					  setBooks={setBooks}
					  setBookList={setBookList}
					  bookList={bookList}
					  fetchError={fetchError}
					  setFetchError={setFetchError}
					  books={books}
					  user={user}
					/>
				 }/>
			  <Route exact path="/wishlistpage" element={
					<WishlistPage
					setWishList={setWishList}
					WishList={wishList}
					 />
				} />
			</Routes>
		  </div>
	</BrowserRouter>
	);
}


export default App;
