import Carousel from "../components/Carousel"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ProductCard from "../components/ProductCard"

const products = [
    { "id": "100001", "name": "Long Chair", "price": 25.99, "currency": "USD", "image": "https://placehold.co/600x400", "category": "Furniture", "inStock": true },
    { "id": "100002", "name": "Modern Sofa", "price": 199.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Furniture", "inStock": true },
    { "id": "100003", "name": "Office Chair", "price": 59.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Office", "inStock": true },
    { "id": "100004", "name": "Wooden Table", "price": 89.5, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Furniture", "inStock": false },
    { "id": "100005", "name": "Study Desk", "price": 129.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Office", "inStock": true },
    { "id": "100006", "name": "Bookshelf", "price": 74.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Storage", "inStock": true },
    { "id": "100007", "name": "Bed Frame", "price": 249.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Bedroom", "inStock": true },
    { "id": "100008", "name": "Night Stand", "price": 39.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Bedroom", "inStock": true },
    { "id": "100009", "name": "Dining Chair", "price": 45.0, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Dining", "inStock": true },
    { "id": "100010", "name": "Dining Table", "price": 299.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Dining", "inStock": false },
    { "id": "100011", "name": "TV Stand", "price": 109.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Living Room", "inStock": true },
    { "id": "100012", "name": "Coffee Table", "price": 69.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Living Room", "inStock": true },
    { "id": "100013", "name": "Wardrobe", "price": 349.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Bedroom", "inStock": true },
    { "id": "100014", "name": "Recliner Chair", "price": 179.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Living Room", "inStock": true },
    { "id": "100015", "name": "Bar Stool", "price": 49.99, "currency": "USD", "image": "https://via.placeholder.com/300x300", "category": "Kitchen", "inStock": true }
]



function HomePage() {
    return (
        <>
            <NavBar />
            <Carousel />
            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-6 my-20">
                    {
                        products.map((product) => {
                            return (<ProductCard product={product} />)
                        })
                    }


                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage