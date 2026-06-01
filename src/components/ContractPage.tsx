import React from 'react';

interface ContractPageProps {
  onRenew: () => void;
}

const ContractPage: React.FC<ContractPageProps> = ({ onRenew }) => {
  return (
    <div className="orkut-card">
      <div className="card-title-bar">
        <span>página de recados (scrapbook)</span>
        <span style={{ fontWeight: 'normal', fontSize: '11px' }}>mostrando 1 de 1</span>
      </div>

      <div className="card-body">
        {/* Caixa de Dias */}
        <div className="counter-box">
          <div className="counter-title">Tempo total de contrato ativo:</div>
          <div className="counter-value">3 anos e 6 meses = 1278 dias!!</div>
        </div>

        {/* Recado do Bruno */}
        <div className="scrap-box">
          <div className="scrap-author">Bruno escreveu:</div>
          "O nosso contrato de parceria, risadas, cafunés e companheirismo expirou! Ele precisa da sua assinatura e renovação digital para continuar ativo por mais um longo ciclo. Aceita os termos?"
        </div>

        {/* Botão Centralizado */}
        <div className="orkut-btn-center">
          <button onClick={onRenew} className="orkut-btn">
             Renovar Contrato
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractPage;