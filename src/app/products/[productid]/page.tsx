export default function productDetails({params}:{
    params: {productid : string};
}
)
{
    return <h1>Product Deails {params.productid}</h1>;
}