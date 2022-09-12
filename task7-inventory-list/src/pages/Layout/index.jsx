import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
        <div className='flex flex-row gap-2 bg-orange-500 text-white font-semibold p-3 justify-end w-full'>
            <Link to="/" className='px-6 py-3 uppercase hover:underline hover:underline-offset-8 hover:decoration-2'>Inventory</Link>
        </div>
        <div className='p-10'>
            <Outlet />
        </div>
    </>
  )
};

export default Layout;