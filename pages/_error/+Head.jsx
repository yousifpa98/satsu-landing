import { usePageContext } from "vike-react/usePageContext";

export default function Head() {
  const { is404 } = usePageContext();
  
  const title = is404 ? "404 - Page Not Found | Satsu" : "500 - Server Error | Satsu";
  const description = is404 
    ? "We couldn't find the page you're looking for. It might have been moved or doesn't exist."
    : "Something went wrong on our server. We're working to fix the issue.";
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="noindex" />
    </>
  );
}