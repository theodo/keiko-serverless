import kumo from 'assets/kumo.svg';

const KumoLogo = (): JSX.Element => (
  <a href="https://dev.to/kumo">
    <img src={kumo} width="auto" height="50px" style={{ marginTop: '15px' }} />
  </a>
);

export { KumoLogo };
