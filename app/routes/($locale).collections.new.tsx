import {defer, type LoaderFunctionArgs} from '@shopify/remix-oxygen';
import {useLoaderData, Link, type MetaFunction} from '@remix-run/react';
import {
    Pagination,
    getPaginationVariables,
    Image,
    Money,
  } from '@shopify/hydrogen';
import type {ProductItemFragment} from 'storefrontapi.generated';
import {useVariantUrl} from '~/lib/variants';


export async function loader(args: LoaderFunctionArgs) {
    // Start fetching non-critical data without blocking time to first byte
    const deferredData = loadDeferredData(args);
  
    // Await the critical data required to render initial state of the page
    const criticalData = await loadCriticalData(args);
  
    return defer({...deferredData, ...criticalData});
}

async function loadDeferredData({context}: LoaderFunctionArgs) {
    
}

async function loadCriticalData({context,request}: LoaderFunctionArgs) {
    const paginationVariables = getPaginationVariables(request, {
        pageBy: 4,
      });
    
    //   const [{collections}] = await Promise.all([
    //     context.storefront.query(COLLECTIONS_QUERY, {
    //       variables: paginationVariables,
    //     }),
    //     // Add other queries here, so that they are loaded in parallel
    //   ]);
    
      return {};
}

export default function NewCollection() {
    return(
        <div>
            <h1>HELLLOooooo</h1>
        </div>
    );
}

