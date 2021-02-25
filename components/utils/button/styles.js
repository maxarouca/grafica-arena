import styled from "styled-components";

export const SButton = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin: 0 10px;
  background-color: ${(props) => props.theme.colors[props.color]};
  border-radius: 10px;
  color: #fff;
  padding: 10px 15px;
  transition: all 0.2s ease;
  max-width: fit-content;
  min-width: max-content;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors["dark" + props.color]};
  }
`;

export const SButtonT = styled.a`
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  margin: 0 10px;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors[props.color] || props.color};
  border-radius: 10px;
  color: #fff;
  padding: 10px 15px;
  transition: all 0.2s ease;
  max-width: fit-content;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: rgba(256, 256, 256, 0.1);
  }
`;
