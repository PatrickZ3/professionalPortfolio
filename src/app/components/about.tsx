"use client"

import React from 'react'
import { statements } from "../data/about-me";

interface Statement {
    input: string;
    return: string;
  }
  
  const About: React.FC = () => {
    return (
      <div className="about-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red" />
            <div className="header-button yellow" />
            <div className="header-button green" />
          </div>
          <div className="terminal-window">
            <Statements statements={statements} />
          </div>
        </div>
      </div>
    );
  };
  
  const Statements: React.FC<{ statements: Statement[] }> = ({ statements }) => {
    return (
      <div>
        {statements.map((statement, index) => (
          <StatementComponent statement={statement} key={index} />
        ))}
        <div className="statement">
          <div className="input-statement">
            <span>&nbsp;</span>
          </div>
        </div>
      </div>
    );
  };
  
  const StatementComponent: React.FC<{ statement: Statement }> = ({ statement }) => {
    return (
      <div className="statement">
        <div className="input-statement">{statement.input}</div>
        <div
          className="return-statement"
          dangerouslySetInnerHTML={{ __html: statement.return }}
        />
      </div>
    );
  };
  
  export default About;