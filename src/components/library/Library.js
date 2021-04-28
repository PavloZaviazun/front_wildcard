import './library.css';

export const Library = () => {

    const collapse = () => {
        const coll = document.getElementsByClassName("collapsible");
        let i;
        for (i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        }
    }

    return (
        <div className={"div-forcard"}>
            <div className={"div-cardspace"}>
                <div className={"div-cardnav"}>
                    <div>Nav back</div>
                    <div className={"div-card"}>Card</div>
                    <div>Nav forward</div>
                </div>
            </div>
            <div className={"div-cardbutt"}>
                <div><button>Shuffle</button></div>
                <div><button>Add to fav</button></div>
            </div>
            <button className="collapsible" onClick={collapse}>Open Collapsible</button>
            <div className="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}
