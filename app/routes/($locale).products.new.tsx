import { useLoaderData } from '@remix-run/react';
import {json, type LoaderFunctionArgs} from '@remix-run/server-runtime';
import { request, gql } from "graphql-request";

export async function loader(args: LoaderFunctionArgs) {
  const query = gql`
  {
    product(id: "gid://shopify/Product/7982905098262") {
      id
      title
      description
      featuredImage {
        id
        url
      }
    }
  }
`;
  const response = await request("https://mock.shop/api", query);
  return json({response});

}

const PRODUCT_QUERY1 = `#graphql
  fragment Product on Product(handle: $handle) {
    id
    title
    vendor
    handle
    descriptionHtml
    description
    options {
      name
      values
}` as const

const PRODUCT_QUERY = `#graphql
  product(handle: $handle) {
    title
  }
`

export default function NewProducts() {
  const product = useLoaderData<typeof loader>();
  return (
    <>
      <h1>Hello  {JSON.stringify(product.response.product.title)}</h1>
    </>
  );
}
