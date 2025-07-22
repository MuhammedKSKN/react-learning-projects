import React from 'react'

function Product({ name, price }) {
    return (
        <div>
            <h2>Ürün Bilgileri</h2>
            <hr />

            <div>
                <div>Ürün Adi: {name}</div>
                <div> Fiyat: {price}</div>
            </div>
            <hr />

        </div>
    )
}
//function Product(probs) {
//     const { name, price } = probs;
//     return (
//         <div>
//             <h2>Ürün Bilgileri</h2>
//             <hr />
//             <div>
//                 <div>Ürün Adi: {probs.name}</div>
//                 <div> Fiyat: {probs.price}</div>
//             </div>
//             <hr />
//             <div>
//                 <div>Ürün Adi: {name}</div>
//                 <div> Fiyat: {price}</div>
//             </div>
//             <hr />
//             <div>
//                 <div> Ürün Adi: Deneme</div>
//                 <div> Fiyat: Deneme</div>
//             </div>
//         </div>
//     )
// }

export default Product