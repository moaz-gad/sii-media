const Footer = () => {
  return (
    <footer className="bg-black py-4 text-center text-white">
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary">ComfySloth</span>
        </p>
        <p className="text-sm">All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
