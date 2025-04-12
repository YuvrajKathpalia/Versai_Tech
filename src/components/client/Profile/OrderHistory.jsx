import { useState, useEffect } from 'react';
import OrderItemCard from '../../common/OrderItemCard';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const mockOrders = [
    {
      id: 'ORD-1234',
      date: '2025-04-05',
      status: 'Delivered',
      total: 89.99,
      items: [
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 89.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
        },
      ]
    },
    {
      id: 'ORD-5678',
      date: '2025-03-22',
      status: 'Processing',
      total: 289.98,
      items: [
        {
          id: 4,
          name: 'Smart Watch',
          price: 199.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
        },
        
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 89.99,
          quantity: 1,
          image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60'
        },
      ]
    }
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setOrders(mockOrders);
      } catch (err) {
        setError('Failed to load order history. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="content-card">
        <div className="border-b border-secondary-200 pb-5 mb-6">
          <h2 className="text-2xl font-bold text-secondary-900">Order History</h2>
          <p className="mt-1 text-sm text-secondary-500">View and track all your orders</p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>  
              <p className="mt-4 text-secondary-500">Loading your orders...</p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-lg">
            <p>{error}</p>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-16">
            <svg className="mx-auto h-12 w-12 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-secondary-900">No orders yet</h3>
            <p className="mt-1 text-secondary-500">Looks like you haven't placed any orders. Start shopping now!</p>
            <div className="mt-6">
              <a href="/" className="btn-primary">
                Browse Products
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="border border-secondary-200 rounded-lg overflow-hidden">
                <div className="bg-secondary-50 px-6 py-5 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-medium text-secondary-900">Order #{order.id}</h3>
                      <span className={`badge ${order.status === 'Delivered' ? 'badge-success' : 'badge-warning'}`}>
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-secondary-500">Placed on {new Date(order.date).toLocaleDateString()}</p>
                  </div>
                  <p className="mt-3 sm:mt-0 text-lg font-semibold text-secondary-900">${order.total.toFixed(2)}</p>
                </div>
                
                <div className="p-6">
                  {order.items.map(item => (
                    <OrderItemCard key={item.id} item={item} />
                  ))}
                </div>
                
                <div className="bg-secondary-50 px-6 py-4 flex justify-end">
                  <a href={`/order/${order.id}`} className="text-sm font-medium text-primary-600 hover:text-primary-500 transition-colors">
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;