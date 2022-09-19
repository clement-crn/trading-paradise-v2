import "./floatingpanel.scss";

function FloatingPanels() {
    return (
        <div>
            <div class="v-center">
                <article>
                    <div class="front">
                        <div class="text">
                            <h1>Placements</h1>
                        </div>
                    </div>
                    <div class="back">
                        <div class="text">
                            <p>
                                Actions, ETF, produits dérivés, vos décisions
                                n'ont aucune limite.
                            </p>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="front">
                        <div class="text">
                            <h1>Organisation</h1>
                        </div>
                    </div>
                    <div class="back">
                        <div class="text">
                            <p>
                                Suivez vos objectifs sur ordinateur, téléphone
                                ou tablette.
                            </p>
                        </div>
                    </div>
                </article>

                <article>
                    <div class="front">
                        <div class="text">
                            <h1>Support</h1>
                        </div>
                    </div>
                    <div class="back">
                        <div class="text">
                            <p>Support disponible 24/7.</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default FloatingPanels;
