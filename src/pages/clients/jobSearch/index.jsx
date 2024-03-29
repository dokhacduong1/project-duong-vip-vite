import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchApiJobSearch } from "./js/fetchApi";
import "./jobSearch.scss";
import { Tabs, Tooltip } from "antd";
import InfoJob from "./infoJob";
import OverviewCompany from "./overviewCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faFlag } from "@fortawesome/free-regular-svg-icons";
import { ShareAltOutlined } from "@ant-design/icons";
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { formatSalaryNoVND } from "../../../helpers/salaryConvert";
import banner from "./images/banner.png";
function JobSearch() {
  const { slug } = useParams();
  const [recordMain, setRecordMain] = useState({});
  const navigate = useNavigate();
  const items = [
    {
      key: "1",
      label: "Chi Tiết",
      children: <InfoJob record={recordMain} />,
    },
    {
      key: "2",
      label: "Tổng Quan Công Ty",
      children: <OverviewCompany record={recordMain} />,
    },
    {
      key: "3",
      label: (
        <ul>
          <li>
            <Tooltip
              color="#fff"
              title={<span style={{ color: "#5d677a" }}>Lưu việc làm</span>}
            >
              <a href="#!">
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              className=""
              title={
                <ul className="tooltip-share">
                  <li>
                    <a href="#!">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <FontAwesomeIcon icon={faGoogle} />
                    </a>
                  </li>
                </ul>
              }
              color="#fff"
            >
              <a href="#!">
                <ShareAltOutlined />
              </a>
            </Tooltip>
          </li>
          <li>
            <Tooltip
              color="#fff"
              title={<span style={{ color: "#5d677a" }}>Báo xấu</span>}
            >
              <a href="#!">
                <FontAwesomeIcon icon={faFlag} />
              </a>
            </Tooltip>
          </li>
        </ul>
      ),
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchApiJobSearch(setRecordMain, slug,navigate);
  }, []);

  return (
    <>
      {recordMain?.title && (
        <section className="cb-section deltail-job">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-15">
                <div className="job-search-one">
                  <div className="job-search-one__banner">
                    <div className="image">
                      <img src={banner} alt="ok" />
                    </div>
                  </div>
                  <div className="job-search-one__content">
                    <div className="job-search-one__desc">
                      <h1>{recordMain.title}</h1>
                      <a href="#!">{recordMain.companyName}</a>
                    </div>
                    <div className="job-search-one__apply">
                      <button>
                        <a>Nộp Đơn Ứng Tuyển</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 ">
                <Tabs defaultActiveKey="1" items={items} />
              </div>
              <div className="col-lg-3">
                <div className="side-wrapper">
                  <div className="side-wrapper__title">
                    <p>Các công việc tương tự</p>
                  </div>
                  <section className="side-wrapper__list">
                    <div className="jobs-list">
                      {recordMain &&
                        recordMain.jobByCategories?.length > 0 &&
                        recordMain.jobByCategories.map((item, index) => (
                          <div key={index}>
                            <div className="job-item">
                              <div className="figure row">
                                <div className="image col-5">
                                  <a
                                    href="#!"
                                    title={item.employerId.companyName}
                                  >
                                    <img
                                      className="lazy-bg"
                                      src={item.employerId.image}
                                      alt={item.employerId.companyName}
                                      style={{}}
                                    />
                                  </a>
                                </div>
                                <div className="figcaption col-7">
                                  <div className="title">
                                    <a
                                      className="job_link"
                                      href={`/tim-viec-lam/${item.slug}`}
                                      title={item.title}
                                    >
                                      {item.title}
                                    </a>
                                  </div>
                                  <div className="caption">
                                    <a
                                      className="company-name"
                                      href="https://careerviet.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mot-thanh-vien-shinhan-viet-nam.35A95615.html"
                                      title="Công ty Tài chính TNHH Một Thành Viên Shinhan Việt Nam "
                                    >
                                      {item.employerId.companyName}
                                    </a>
                                    <p className="salary">
                                      <em className="fa fa-usd" />
                                      Lương:{" "}
                                      {formatSalaryNoVND(
                                        item?.salaryMin,
                                        item?.salaryMax
                                      )}
                                    </p>
                                    <div className="location">
                                      <em className="mdi mdi-map-marker" />
                                      <ul>
                                        <li>
                                          {" "}
                                          <FontAwesomeIcon
                                            icon={faLocationDot}
                                          />{" "}
                                          Hồ Chí Minh
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
    </>
  );
}
export default JobSearch;
