import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const PurchaseModal = ({ order, handleOrder, setOrder }) => {
    const { name } = order;
    const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" checked />
            <div className="modal sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" onClick={() => setOrder(null)} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-10">Confirm Order for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
                        <input type="text" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" required />
                        <input type="submit" value="Proceed to Payment" className="btn bg-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default PurchaseModal;