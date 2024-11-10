import axios from "axios";
import { useEffect, useState } from "react";

const HomeView = () => {
  //store data secara state react nya
  const [shops, setShops] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stock, setStock] = useState("");
  const [productName, setProductName] = useState("");

  const handleFilter = (event) => {
    event.preventDefault();
    fetchShops(stock, productName);
  };

  const fetchShops = async (stock = "", productName = "") => {
    setLoading(true);
    try {
      let response;
      if (productName && stock) {
        response = await axios.get(
          `http://localhost:3000/api/v1/shops?productName=${productName}&stock=${stock}`
        );
      } else if (stock) {
        response = await axios.get(
          `http://localhost:3000/api/v1/shops?stock=${stock}`
        );
      } else if (productName) {
        response = await axios.get(
          `http://localhost:3000/api/v1/shops?productName=${productName}`
        );
      } else {
        response = await axios.get("http://localhost:3000/api/v1/shops");
      }
      console.log(response.data.data);

      let data = response.data;
      if (data.isSuccess) {
        setShops(data.data.shops);
      } else {
        console.log(response);
        setError("error");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //fetch data, fetch / axios
  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <>
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-blue-800">Binar Car Rental</h1>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-700">
              Our Services
            </a>
            <a href="#" className="text-gray-700">
              Why Us
            </a>
            <a href="#" className="text-gray-700">
              Testimonial
            </a>
            <a href="#" className="text-gray-700">
              FAQ
            </a>
          </nav>
        </div>
        <button className="px-4 py-2 text-white bg-green-500 rounded-md">
          Register
        </button>
      </header>

      <div>
        <form onSubmit={handleFilter}>
          <div class="text-left space-y-12 mt-10 mb-10">
            <div class="border-gray-200 border-2 rounded pt-3 pb-3 shadow-sm">
              <div class="flex justify-around sm:col-span-3">
                <div class="w-44">
                  <label
                    for="productName"
                    class="block text-sm/6 font-medium text-gray-900"
                  >
                    Product Name
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="productName"
                      id="productName"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      autocomplete="address-level2"
                      class="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div class="w-44">
                  <label
                    for="stock"
                    class="block text-sm/6 font-medium text-gray-900"
                  >
                    Stock
                  </label>
                  <div class="mt-2">
                    <input
                      type="text"
                      name="stock"
                      id="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      autocomplete="address-level2"
                      class="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
                <div class="flex items-center">
                  <button
                    type="submit"
                    class="w-44 mt-8 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      {loading && <p> loading... </p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && (
        <section className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {" "}
          {shops.map((shop, index) => (
            <div
              key={index}
              className="p-4 border rounded-md bg-white shadow-md"
            >
              {" "}
              <img
                src={shop.products[0].images[0]}
                alt={shop.products[0].name}
                className="w-full h-40 object-cover mb-4"
              />{" "}
              <h3 className="font-semibold">{shop.products[0].name}</h3>{" "}
              <p className="text-green-500 font-bold">
                Rp. {shop.products[0].price}
              </p>{" "}
              <p className="text-gray-600 mt-2 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>{" "}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                {" "}
                <span>{shop.products[0].stock}</span> <span>Manual</span>{" "}
                <span>Tahun 2020</span>{" "}
              </div>{" "}
              <button className="w-full px-4 py-2 mt-4 text-white bg-green-500 rounded-md">
                Pilih Mobil
              </button>{" "}
            </div>
          ))}{" "}
        </section>
      )}
    </>
  );
};

export default HomeView;
