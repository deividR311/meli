import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBreadCrumb = () => {

  const { pathname } = useLocation();
  let path = pathname.split('/');

  console.log(path);
  
  return (
    <>
      <div className='breadcrumb-ctn'>
        <Breadcrumb className='breadcrumb'>
          { path.map(route => (
              <Breadcrumb.Item className='breadcrumb-item'>
                <Link to={ route }>
                  { route }
                </Link>
              </Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
      </div>
    </>
  )
}

export default NavBreadCrumb
