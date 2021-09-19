package com.readers.jikji.repository.user;

import com.readers.jikji.domain.user.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * 사용자 정보와 관련한 Repository
 */
@Repository
public interface AuthorityRepository extends JpaRepository<Authority, Long> {

}
