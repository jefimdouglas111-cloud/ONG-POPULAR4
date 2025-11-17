export const templates = {
    home: () => `
        <section class="hero">
            <div class="hero-content">
                <h1>Transforme Vidas sendo um Voluntariado</h1>
                <p>Somos uma organização dedicada à promoção da solidariedade,</p>
                <p>inclusão social e ao atendimento de famílias.</p>
                <p>Junte-se a nós e faça a diferença!</p>
                <a href="#cadastro" class="btn-primary" data-nav="cadastro">Quero Ser Voluntário</a>
            </div>
            <div class="container-imagens">
                <img src="Imagens/criançasvolun.webp" alt="foto de voluntários">
            </div>
        </section>
        <section class="about">
            <h2>Quem Somos</h2>
            <p>Uma organização sem fins lucrativos, que atua no atendimento de famílias em inclusão social, promovendo dignidade, esperança e oportunidades para quem mais precisa.</p>
            <h3>Seja a Mão Amiga que Transforma Vidas</h3>
            <p>Existe uma recompensa que dinheiro nenhum pode comprar: O sorriso de gratidão de quem recebe ajuda. Convidamos você a fazer parte da nossa equipe de solidariedade.</p>
            <p>Doe seu tempo, seu talento e sua empatia. Venha ser um(a) voluntário(a) e descubra o poder de fazer o bem. Abrace essa causa conosco!</p>
            <p>Acreditamos que a esperança é contagiosa e que pequenos gestos de bondade podem mudar realidades.</p>
            <p>Queremos convidar você a canalizar sua energia e seu desejo de ajudar o próximo para a nossa missão.</p>
            <p>Não espere por grandes momentos; encontre a sua oportunidade de fazer a diferença aqui, conosco.</p>
            <p>Venha somar forças e espalhar mais dignidade e esperança.</p>
        </section>
    `,
    projetos: () => `
        <section class="projects-section">
            <h2>Nossos Projetos</h2>
            <p>Conheça as iniciativas que estamos desenvolvendo para impactar positivamente a comunidade.</p>
            <ul>
                <li>Projeto Acolhimento: Suporte a famílias em situação de vulnerabilidade.</li>
                <li>Oficinas de Capacitação: Cursos profissionalizantes para inclusão no mercado de trabalho.</li>
                <li>Campanhas de Doação: Arrecadação de alimentos, roupas e itens essenciais.</li>
            </ul>
        </section>
    `,
    cadastro: () => `
        <section class="cadastro-section">
            <h2>Formulário de Voluntariado</h2>
            <p>Preencha o formulário abaixo e entraremos em contato!</p>
            <!-- O formulário com campos e spans para erros -->
            <form id="volunteerForm">
                <div>
                    <label for="name">Nome Completo:</label>
                    <input type="text" id="name" required>
                    <span class="error" id="nameError"></span>
                </div>
                <div>
                    <label for="email">E-mail:</label>
                    <input type="email" id="email" required>
                    <span class="error" id="emailError"></span>
                </div>
                <div>
                    <label for="phone">Telefone (opcional):</label>
                    <input type="tel" id="phone">
                </div>
                <button type="submit" class="btn-primary">Enviar Inscrição</button>
            </form>
        </section>
    `
};
