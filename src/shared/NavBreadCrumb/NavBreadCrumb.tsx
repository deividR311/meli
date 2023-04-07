import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBreadCrumb = () => {

  const { pathname } = useLocation();
  let path = pathname.split('/');
  
  return (
    <>
      <div className='breadcrumb-ctn'>
        <Breadcrumb className='breadcrumb'>
          { path.map((route, i) => (
              <Link to={ route } key={`${i}-${route}`} className='breadcrumb-item'>
                { route }
              </Link>
            ))
          }
        </Breadcrumb>
      </div>
    </>
  )
}

export default NavBreadCrumb;
