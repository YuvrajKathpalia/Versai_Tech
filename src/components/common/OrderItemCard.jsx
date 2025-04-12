const OrderItemCard = ({ item }) => {
  return (
    <div className="flex items-center py-4 border-b border-secondary-200 last:border-b-0">
      <div className="h-20 w-20 bg-secondary-100 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="ml-4 flex-grow">
        <h4 className="font-medium text-secondary-900">{item.name}</h4>
        <p className="text-sm text-secondary-500 mt-1">Qty: {item.quantity}</p>
      </div>
      
      <div className="text-right">
        <p className="font-semibold text-secondary-900">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default OrderItemCard;