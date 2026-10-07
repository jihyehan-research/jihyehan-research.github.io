import PublicationBrowser from './publication-browser';
export const metadata = { title: 'Publications | Jihye Han' };
export default function Page() { return <section id="publications"><div className="section-heading"><p className="eyebrow">Publications</p><h1>Peer-reviewed journal articles</h1></div><PublicationBrowser/></section>; }
