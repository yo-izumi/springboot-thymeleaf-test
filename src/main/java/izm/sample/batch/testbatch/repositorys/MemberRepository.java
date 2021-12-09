package izm.sample.batch.testbatch.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;

import izm.sample.batch.testbatch.resources.MemberEntity;

public interface MemberRepository extends JpaRepository<MemberEntity, String> {
    
}
