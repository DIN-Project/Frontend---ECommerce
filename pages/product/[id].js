import Nav from '../../components/nav.js'
import Footer from '../../components/footer.js'
import styles from '../../styles/productpage.module.css'


export default function ProductPage({product}){
    return (
        <main>
            <Nav />
            <div className={styles.container}>
                <img src="https://picsum.photos/500/300" />
                <ul>
                    <li className={styles.title}>{product.name}</li>
                    <li className={styles.customsize}>{product.price}€</li>
                    <li className={styles.alv}>Sisältäen alv.24%</li>
                    <li className={styles.title}>Add to cart</li>
                </ul>
            </div>
            <div className={styles.itemdetails}>
                <div>{product.description}</div>
            </div>
            <Footer />
        </main>
    );
}

export async function getServerSideProps(context){
    const {id} = context.query
    const res = await fetch(`http://localhost:5283/Motherboard/${id}`);
    const product = await res.json();

    return {
        props: {
          product,
        },
    };
}