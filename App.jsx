import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, Html } from '@react-three/drei';
import { Suspense } from 'react';
import './App.css';

function Section({ title, children, position }) {
  return (
    <Html position={[0, 0, position]} center>
      <div className="section">
        <h1>{title}</h1>
        <div>{children}</div>
      </div>
    </Html>
  );
}

export default function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ScrollControls pages={6}>
          <Scroll>
            <Section title="Sohail Shaik – Bioinformatics Researcher" position={0}>
              MSc Bioinformatics | Machine Learning | Precision Medicine
            </Section>

            <Section title="Education" position={-10}>
              MSc – University of West London (Distinction)<br />
              Thesis: ML Breast Cancer Diagnosis<br />
              BSc – Aurora College (Osmania University)<br />
              Thesis: Phylogenetic Analysis in PCOS
            </Section>

            <Section title="Research & Projects" position={-20}>
              Breast Cancer Diagnostic Tool – Multi-omics AI integration<br />
              PCOS Gene Phylogenetics – MEGA, ClustalW, NCBI, Ensembl
            </Section>

            <Section title="Technical Skills" position={-30}>
              Python (TensorFlow, Scikit-learn), R (DESeq2, Bioconductor)<br />
              Databases: NCBI, TCGA, UniProt, GEO, Ensembl<br />
              Visualization: Matplotlib, Seaborn, ggplot2, Plotly
            </Section>

            <Section title="Certifications" position={-40}>
              IBM Data Analyst, UCSD Bioinformatics, Great Learning (ML, R)
            </Section>

            <Section title="Contact" position={-50}>
              Email: sohail321uk@gmail.com<br />
              LinkedIn: linkedin.com/in/sohail-shaik-ba280b242/<br />
              Kaggle: kaggle.com/sohailshaik
            </Section>
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
}
