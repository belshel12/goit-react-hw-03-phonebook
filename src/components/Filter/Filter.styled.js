import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  margin: 0 0 12px 0;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  self-align: center;
  padding: 8px;

  font-weight: 500;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
`;

export const FilterInput = styled.input`
  padding: 8px;
  margin: 4px 0 0 0;
  background-color: #fff;

  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  outline: none;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;
