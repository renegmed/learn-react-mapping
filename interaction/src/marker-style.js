export default `
.station:before {
  content: ' ';
  display: inline-block;
  width: 12px;
  height: 12px;
  background: green;
  border-radius: 8px;
  margin: 0 8px;
  opacity: 0.8;
}
.station {
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  opacity: 0.8;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
}
.station span {
  display: none;
}
.station:hover {
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.station:hover span {
  display: inline-block;
}

.station2:before {
  content: ' ';
  display: inline-block;
  width: 12px;
  height: 12px;
  background: red;
  border-radius: 8px;
  margin: 0 8px;
  opacity: 0.8;
}
.station2 {
  border-radius: 20px;
  padding-right: 12px;
  margin: -12px;
  color: transparent;
  opacity: 0.8;
  line-height: 24px;
  font-size: 13px;
  white-space: nowrap;
}
.station2 span {
  display: none;
}
.station2:hover {
  background: rgba(0,0,0,0.8);
  color: #fff;
}
.station2:hover span {
  display: inline-block;
}
`;
