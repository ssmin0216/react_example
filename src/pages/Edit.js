import {useNavigate, useSearchParams} from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>Edit</h1>
      <p>이곳은 {id} {mode} 일기 수정 페이지 입니다.</p>
      <button onClick={() => setSearchParams({who: 'ssm'})}>QS 바꾸기</button>
      <button onClick={() => {
        navigate("/");
      }}>Home으로 가기
      </button>
      <button onClick={() => {
        navigate(-1)
      }}>뒤로가기
      </button>
    </div>
  );
};

export default Edit;
