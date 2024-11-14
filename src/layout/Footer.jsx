function Footer() {
    return (
        <footer className="page-footer #455a64 blue-grey darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="large material-icons grey-text text-lighten-4 right" href="#!">beenhere</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer }