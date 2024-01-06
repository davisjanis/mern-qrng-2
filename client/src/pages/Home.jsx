import React from "react";

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>
        Remote Quantum Random Number Generator
      </h1>
      
      <p className='mb-4'>
          by <a className='text-1xl font-bold text-blue-500' 
          href="http://www.lumii.lv">
          Institute of Mathematics and Computer Science, University of Latvia
          </a>
      </p>
      
      <p className='mb-4 text-slate-700'>
          The experimental remote quantum random generator (QRNG) web 
          service is based on a IDQ <a className='text-blue-500' href="https://www.idquantique.com/random-number-generation/products/quantis-qrng-pcie/">
          <strong>Quantis QRNG device</strong></a>.
          The link between the web service and its clients is quantum-safe, 
          i.e., encrypted by <a href="https://en.wikipedia.org/wiki/Post-quantum_cryptography">PQC</a> algorithms: FrodoKEM and SPHINCS+.
      </p>

      <p className='mb-4 text-slate-700'>
          Please, cite our paper: <a className='text-blue-500' href="https://link.springer.com/chapter/10.1007/978-3-031-16815-4_32">
            S. Kozlovičs, J. Vīksna: A Transparent Remote Quantum Random Number Generator over a Quantum-Safe Link </a> 
            <a href="https://citation-needed.springer.com/v2/references/10.1007/978-3-031-16815-4_32?format=bibtex&amp;flavour=citation">Download BibTeX</a>
      </p>

      <h3 className='text-2xl font-bold mb-4 text-slate-800'>
        Diagram
      </h3>

      <p>
        <img src="/rqrng-architecture.drawio.png" alt="RQRNG diagram" />
      </p>
      
      <h3 className='text-2xl font-bold mb-4 mt-4 text-slate-800'>
        Requirements
      </h3>

      <p className='mb-4 text-slate-700'>
        In order to connect to our QRNG web service, 
        you will need the <a className='text-blue-500' href="https://github.com/LUMII-Syslab/qrng-client">
        QRNG client native library</a> and these files:
      </p>

      <div className='mb-4'>
        <ul className='list-disc'>
            <li><code >ca.truststore</code> (the root CA certificate used to sign the QRNG server HTTPS certificate and client sertificates)</li>
            <li><code >token.keystore</code> (your client certificate, signed by the CA that serves the QRNG server)</li>
            <li><code >qrng.properties</code> (key passwords and other settings)</li>
        </ul>
      </div>

      <p className='mb-4 text-slate-700'>
        We are going to provide Windows and Linux software that replaces the system random
        number generator with ours.
      </p>

      <p className='mb-4 text-slate-700'>
        All certificates (CA, client-side, and server-side) 
        are based on the quantum-resistant <a className='text-blue-500' href="https://sphincs.org">SPHINCS+</a> algorithm.
      </p>

      <p className='mb-4 text-slate-700'>
        The source code for the QRNG web service can be found 
        <a className='text-blue-500' href="https://github.com/LUMII-Syslab/qrng-web-service"> here</a>.
      </p>
    
      <h3 className='text-2xl font-bold mb-4 text-slate-800'>
        Further Information
      </h3>

      <p className='mb-4 text-slate-700'>
        For more information about how to set up the:
      </p>

      <div className='mb-4'>
        <ul className='list-disc'>
          <li>Web service for distributing random bytes, see <a className='text-blue-500' href="01-web-service">QRNG web service</a>;</li>
          <li>RQRNG native client for receiving random numbers, see <a className='text-blue-500' href="02-native-client">QRNG client library</a>;</li>
          <li>Systemd service + linux kernel module for <code >/dev/qrandom0</code>, see <a className='text-blue-500' href="03-os-integration">QRNG kernel module</a>.</li>
        </ul>
      </div>

      <h3 className='text-2xl font-bold mb-4 text-slate-800'>
        Acknowledgement
      </h3>

      <p className='mb-4 text-slate-700'>
        Research supported by <a className='text-blue-500' 
        href="https://syslab.lumii.lv/projects/erafprojects/kvantu-kriptografijas-pielietojumu-projekts">
        the European Regional Development Fund,
        project No. 1.1.1.1/20/A/106
        </a>
      </p>

    </div>
  )
}
