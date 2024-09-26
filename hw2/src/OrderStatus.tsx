export default function OrderStatus({orderId, status}:{orderId:number, status:string}){
    return(
        <h3>
            Заказ #{orderId}: {status}
        </h3>
    );
}